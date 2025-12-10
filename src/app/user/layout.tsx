export default function UsersLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="info">
        message for all users
      </div>
      <div className="content">
        {children}
      </div>
    </>
  );
}
