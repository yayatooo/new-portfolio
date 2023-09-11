"use client";
import Link from "next/link";
import { BsGithub as GithubIcon } from "react-icons/bs";
import SectionHeading from "@/app/hooks/elements/SectionHeading";
import SectionSubHeading from "@/app/hooks/elements/SectionSubHeading";
import { GITHUB_ACCOUNTS } from "@/app/constant/github";
import { motion } from "framer-motion";

import Calendar from "./Calendar";
import Overview from "./Overview";

type ContributionsProps = {
  githubData: any;
};

export default function Contributions({ githubData }: ContributionsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-y-2 py-4"
    >
      <SectionHeading
        title="Contributions"
        icon={<GithubIcon className="mr-1" />}
      />
      <SectionSubHeading>
        <p className="dark:text-neutral-400">
          My contributions from last year on github.
        </p>
        <Link
          href={`https://github.com/${GITHUB_ACCOUNTS.username}`}
          target="_blank"
          passHref
          className="text-sm font-code text-neutral-600 dark:text-neutral-400 hover:text-neutral-700 hover:dark:text-neutral-400"
        >
          @{GITHUB_ACCOUNTS.username}
        </Link>
      </SectionSubHeading>

      {!githubData && <div className="dark:text-neutral-400">No Data</div>}

      {githubData && (
        <div className="space-y-3">
          <Overview data={githubData} />
          <Calendar data={githubData} />
        </div>
      )}
    </motion.section>
  );
}
