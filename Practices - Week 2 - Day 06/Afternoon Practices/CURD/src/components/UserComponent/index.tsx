import type { User } from "../../types/User";
import ButtonComponent from "../ButtonComponent";

type Props = {
  user: User;
  deleteHandle: () => void;
  editHanlde: () => void;
};

const UserComponent = ({ user, deleteHandle, editHanlde }: Props) => {
  return (
    <div className="flex flex-wrap items-center gap-4 p-4 border border-gray-200 rounded-xl shadow-md bg-white">
      <div className="flex flex-wrap gap-4 flex-1">
        <InfoBox label="ID" value={user.id} />
        <InfoBox label="First Name" value={user.firstName} />
        <InfoBox label="Last Name" value={user.lastName} />
        <InfoBox label="Address" value={user.address} />
        <InfoBox label="Birthday" value={user.birthday} />
        <InfoBox label="Email" value={user.email} />
        <InfoBox label="Phone" value={user.phoneNumber} />
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <ButtonComponent name="Sửa" styles="bg-yellow-500 hover:bg-yellow-600" handle={editHanlde}/>
        <ButtonComponent name="Xóa" styles="bg-red-500 hover:bg-red-600" handle={deleteHandle} />
      </div>
    </div>
  );
};

const InfoBox = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <div className="w-[200px] p-3 bg-gray-100 rounded-md shadow-sm">
    <div className="text-sm text-gray-500 font-medium">{label}</div>
    <div className="text-base text-gray-800 truncate">{value}</div>
  </div>
);

export default UserComponent;
