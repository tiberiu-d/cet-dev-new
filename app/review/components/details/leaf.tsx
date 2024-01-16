type LeafProps = {
  LABEL: string;
  VALUES: string[] | undefined;
};

const Leaf = (data: LeafProps) => {
  return (
    <div className="w-full flex items-start justify-between p-1 border-b mt-1">
      <div className="h-full flex flex-col items-start font-semibold">
        {data.LABEL}
      </div>
      <div className="value thing">
        {data.VALUES?.map((item) => (
          <div key={item} className="max-w-[400px] text-justify">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Leaf;
