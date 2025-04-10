import { Center, Container, Flex, Loader } from "@mantine/core";

const LoaderPage = () => {
  return (
    <Container h={"100vh"} component={Center}>
      <Loader color="dark"  />
    </Container>
  );
};

export default LoaderPage;
