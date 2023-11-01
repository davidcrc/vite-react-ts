type ButtonProps = {
  title: string;
  backgroundColor: string;
};

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button
        className={` ${props.backgroundColor} text-black rounded-full px-8 py-2 font-medium hover:bg-[#8482FF] hover:text-white transition-all`}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
