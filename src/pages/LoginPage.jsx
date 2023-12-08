const LoginPage = () => {
  return (
    <>
      <div className="flex flex-col items-start border font-medium text-base">
        <div>Name</div>
        <div>Password</div>
      </div>
      <div>
        <div><input type="text" className="border"/></div>
        <div><input type="text" className="border"/></div>
      </div>    
    </>    
  );
}

export default LoginPage;