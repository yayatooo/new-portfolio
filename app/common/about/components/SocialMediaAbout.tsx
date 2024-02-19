import ButtonSocialMedia from "@/app/hooks/ButtonSocialMedia";
import { FaMedium } from "react-icons/fa6";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFileAlt } from "react-icons/fa";

const SocialMediaAbout = () => {
  return (
    <div className="flex flex-wrap gap-4 xs:justify-center lg:justify-start">
      <ButtonSocialMedia href="https://www.linkedin.com/in/rahmat-hidayat-2113a51a3/">
        LinkedIn
        <AiFillLinkedin />
      </ButtonSocialMedia>
      <ButtonSocialMedia href="https://medium.com/@yayatbx">
        Medium <FaMedium />
      </ButtonSocialMedia>
      <ButtonSocialMedia href="https://t.me/yayatoooo">
        Telegram
        <PiTelegramLogoDuotone />
      </ButtonSocialMedia>
      <ButtonSocialMedia href="https://docs.google.com/document/d/1Xz1Jy2wYGJFrcJLLp2XHZHfyeI9I8l9iNQG3Ojf-J6E/edit?usp=sharing">
        Resume
        <FaFileAlt />
      </ButtonSocialMedia>
    </div>
  );
};

export default SocialMediaAbout;
