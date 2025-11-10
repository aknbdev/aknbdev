import { IconType } from "react-icons";

import {HiOutlineDownload,} from "react-icons/hi";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiDocker,
  SiAnsible,
  SiSpringboot,
  SiGrafana,
  SiPrometheus,
  SiSentry,
  SiGnubash,
  SiNginx,
  SiGooglecloud,
} from "react-icons/si";

import {
	FaDiscord,
	FaGithub,
	FaLinkedin,
	FaX,
	FaTelegram,
	FaJava,
	FaGitlab,
	FaJenkins,
	FaDocker,
	FaPython,
	FaGitAlt,
} from "react-icons/fa6";

import { BiLogoPostgresql } from "react-icons/bi";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  telegram: FaTelegram,
  x: FaX,
  gitlab: FaGitlab,
  jenkins: FaJenkins,
  docker: FaDocker,
  java: FaJava,
  python: FaPython,
  git: FaGitAlt,
  download: HiOutlineDownload,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  ansible: SiAnsible,
  springboot: SiSpringboot,
  grafana: SiGrafana,
  prometheus: SiPrometheus,
  sentry: SiSentry,
  bash: SiGnubash,
  nginx: SiNginx,
  google: SiGooglecloud,
  postgresql: BiLogoPostgresql,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
