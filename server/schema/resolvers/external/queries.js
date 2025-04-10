const { verifyToken } = require("../../../helpers/verifyToken");
const model = require("../../../model/indexModel");

const External_Queries = {
  User: {
    resume: async ({ user_id }, _, { headers }) => {
      try {
        const verify = await verifyToken(headers.authorization);
        if (!verify) {
          return null;
        }
        const result = await model.resumes.findOne({
          where: { user_id: user_id },
        });
        return result;
      } catch (error) {
        throw error;
      }
    },
    applied_jobs: async ({ user_id }, _, { headers }) => {
      try {
        const verify = await verifyToken(headers.authorization);
        if (!verify) {
          return null;
        }
        const result = await model.appliedJobs.findAll({
          where: { user_id: user_id },
        });
        return result;
      } catch (error) {
        throw error;
      }
    },
    saved_jobs: async ({ user_id }, _, { headers }) => {
      try {
        const verify = await verifyToken(headers.authorization);
        if (!verify) {
          return null;
        }
        const result = await model.savedJobs.findAll({
          where: { user_id: user_id },
        });
        return result;
      } catch (error) {
        throw error;
      }
    },
  },
  AppliedJob: {
    job: async ({ job_id }, _, { headers }) => {
      const verify = await verifyToken(headers.authorization);
      if (!verify) {
        return null;
      }
      try {
        const result = await model.job.findOne({ where: { job_id: job_id } });
        return result;
      } catch (error) {
        throw error;
      }
    },
  },
  SavedJob: {
    job: async ({ job_id }, _, { headers }) => {
      try {
        const verify = await verifyToken(headers.authorization);
        if (!verify) {
          return null;
        }
        const result = await model.job.findOne({ where: { job_id: job_id } });
        return result;
      } catch (error) {
        throw error;
      }
    },
  },
  Job: {
    user_saved: async ({ job_id }, _, { headers }) => {
      try {
        const verify = await verifyToken(headers.authorization);
        if (!verify) {
          return null;
        }
        const conditionalObject = verify.role + "_id";
        const result = await model.savedJobs.findOne({
          where: {
            job_id: job_id,
            [conditionalObject]: verify[conditionalObject],
          },
        });
        if (result) {
          return true;
        }
        return false;
      } catch (error) {
        throw error;
      }
    },
    user_applied: async ({ job_id }, _, { headers }) => {
      try {
        const verify = await verifyToken(headers.authorization);
        if (!verify) {
          return null;
        }
        const conditionalObject = verify.role + "_id";
        const result = await model.appliedJobs.findOne({
          where: {
            job_id: job_id,
            [conditionalObject]: verify[conditionalObject],
          },
        });
        if (result) {
          return true;
        }
        return false;
      } catch (error) {
        throw error;
      }
    },
    applied_users: async ({ job_id }, _, { headers }) => {
      try {
        const verify = await verifyToken(headers.authorization);
        if (!verify) {
          return null;
        }
        if (verify.role != "admin") {
          return null;
        }
        const result = await model.appliedJobs.findAll({
          where: { job_id: job_id },
        });

        return result;
      } catch (error) {
        throw error;
      }
    },
  },
  // BookingInvoice: {
  //   User: async ({ user_id }) => {
  //     try {
  //       const result = await model.booking_user.findAll({
  //         where: { user_id: user_id },
  //       });
  //       return result;
  //     } catch (error) {
  //       throw error;
  //     }
  //   },
  // },
};
module.exports = External_Queries;
