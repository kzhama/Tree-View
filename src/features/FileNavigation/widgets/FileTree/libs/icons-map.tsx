import { SiJavascript } from "react-icons/si";
import { FaReact, FaReadme } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";
import { AiFillHtml5, AiFillFolder, AiFillFolderOpen } from "react-icons/ai";
import { BsFileEarmarkImage, BsFiletypeCss } from "react-icons/bs";

export const FILE_ICONS = {
  js: <SiJavascript color="gold" />,
  jsx: <FaReact color="deepskyblue" />,
  css: <BsFiletypeCss color="deeppink" />,
  html: <AiFillHtml5 color="orangered" />,
  ico: <BsFileEarmarkImage color="teal" />,
  json: <VscJson color="limegreen" />,
  md: <FaReadme color="lightgoldenrodyellow" />,
};

export const FOLDER_ICONS = {
  closed: <AiFillFolder color="lightslategrey" />,
  opened: <AiFillFolderOpen color="lightslategrey" />,
};
