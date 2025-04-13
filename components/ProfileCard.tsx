import Image from "next/image";

const ProfileCard = ({
  css = "h-20 w-20 sm:h-30 sm:w-30 ",
}: {
  css?: string;
}) => {
  return (
    <Image
      src="/Samir Tiwari.jpg"
      alt="Samir Tiwari"
      width="130"
      height="180"
      quality="95"
      priority
      className={` rounded-full object-cover  shadow-xl ${css && css}`}
    />
  );
};

export default ProfileCard;
