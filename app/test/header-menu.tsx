type HeaderMenuType = {
  ID: string;
  CREATED_ON: string;
};

const HeaderMenu = ({ ID, CREATED_ON }: HeaderMenuType) => {
  return (
    <div className="w-full p-2 text-sm">
      Now looking at escalation{" "}
      <span className="font-bold text-blue-500">{ID}</span>, created on{" "}
      {CREATED_ON}
    </div>
  );
};
export default HeaderMenu;
