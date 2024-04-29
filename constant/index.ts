// ENV DATA
export const APP_WRITE_URL = process.env.NEXT_PUBLIC_APPWRITE_URL;

export const APP_WRITE_PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

export const APP_DOMAIN = process.env.NEXT_PUBLIC_APP_URL;

export const APP_WRITE_DATABASE_ID =
  process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;

export const APP_WRITE_COLLECTION_ID =
  process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;

export const APP_WRITE_BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID;

export const APP_WRITE_API_ENDPOINT_KEY =
  process.env.NEXT_PUBLIC_NODE_SDK_ENDPOINT_API_KEY;

export const VERIFIED_USER = `${process.env.NEXT_PUBLIC_APP_URL}/verified-user`;

export const APP_AUTH_SUCCESS = `${process.env.NEXT_PUBLIC_APP_URL}/`;

export const APP_AUTH_FAILURE = `${process.env.NEXT_PUBLIC_APP_URL}/failure`;

// Constants Data for the app

export const ALLSOCIALLINKS = {
  linkedin: "https://www.linkedin.com/company/internee-pk/",
  youtube: "https://www.youtube.com/@InterneePk",
  instagram: "https://www.instagram.com/internee.pk/",
  facebook: "https://www.facebook.com/profile.php?id=100092672087043",
  twitter: "https://twitter.com/Internee_pk",
};

export const AllComponentIds = {
  hero: "HeroBanner",
};

import { CgProfile } from "react-icons/cg";
import { FaGithub, FaEllipsisH } from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";

import {
  Loader2,
  LogOut,
  Settings2,
  Settings,
  ShieldCheck,
  UserCog,
  Blocks,
  FolderKanban,
  CircleEllipsis,
  Lock,
  Trash2,
  Plus,
  ShieldAlert,
  X as Cut,
} from "lucide-react";
export {
  CgProfile as ProfileIcon,
  FaGithub,
  FcGoogle,
  Loader2,
  LogOut,
  Settings2,
  Settings,
  ShieldCheck,
  UserCog as UserIcon,
  Blocks as BlogIcon,
  FolderKanban as InternshipIcon,
  CircleEllipsis,
  FaEllipsisH,
  Lock,
  Trash2,
  Plus,
  ShieldAlert,
  Cut,
};
