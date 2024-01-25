type FormWrapperType = {
  children: React.ReactNode;
};

const FormWrapper = ({ children }: FormWrapperType) => {
  return (
    <>
      <div className="w-full flex flex-col">{children}</div>
    </>
  );
};
export default FormWrapper;
