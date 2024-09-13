import githubIcon from "./assets/github.svg";
import gmailIcon from "./assets/google.svg";
import whatsappIcon from "./assets/wa.svg";
import linkedin from "./assets/linkedin.svg";

export const IcoGithub = ({ ...props }) => {
  return <object {...props} type="image/svg+xml" data={githubIcon} />;
};

export const IcoGmail = ({ ...props }) => {
  return <object {...props} type="image/svg+xml" data={gmailIcon} />;
};

export const IcoWhatsapp = ({ ...props }) => {
  return <object {...props} type="image/svg+xml" data={whatsappIcon} />;
};

export const IcoLinkedin = ({ ...props }) => {
  return <object {...props} type="image/svg+xml" data={linkedin} />;
};
