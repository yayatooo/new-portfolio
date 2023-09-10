import ButtonSocialMedia from "@/app/hooks/ButtonSocialMedia";
import { FaGithub } from "react-icons/fa6";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { AiFillLinkedin } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";

const SocialMediaAbout = () => {
  return (
    <div className="flex flex-wrap gap-4 xs:justify-center lg:justify-start">
      <ButtonSocialMedia href="https://www.linkedin.com/in/rahmat-hidayat-2113a51a3/">
        LinkedIn
        <AiFillLinkedin />
      </ButtonSocialMedia>
      <ButtonSocialMedia href="https://github.com/yayatooo">
        Github <FaGithub />
      </ButtonSocialMedia>
      <ButtonSocialMedia href="https://t.me/yayatoooo">
        Telegram
        <PiTelegramLogoDuotone />
      </ButtonSocialMedia>
      <ButtonSocialMedia href="./pdf/Frontend Developer_Rahmat Hidayat.pdf">
        Download CV
        <BiDownload />
      </ButtonSocialMedia>
    </div>
  );
};

export default SocialMediaAbout;
