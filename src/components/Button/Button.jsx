const Button = ({ className, text }) => {
  return (
    <div
      className={` ${className} text-green-500 border  border-green-500 px-6 hover:bg-green-500 hover:text-white py-2 duration-700 rounded-md`}
    >
      {text}
    </div>
  );
};

export default Button;
