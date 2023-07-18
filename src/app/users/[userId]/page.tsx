type UserProps = {
  params: {
    userId: string;
  };
};

const User = function ({ params }: UserProps) {
  return (
    <div>
      <h1>User {params.userId} Page</h1>
    </div>
  );
};

export default User;
