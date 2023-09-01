import { UserButton } from "@clerk/nextjs";

const HomeScreen = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default HomeScreen;
