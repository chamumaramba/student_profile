import React from "react";
import { Button, Checkbox, Input } from "@nextui-org/react";
import Link from "next/link";
import {BsPerson} from 'react-icons/bs'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      
      <Link href="/profile" passHref>
      
      <Button
      className="py-2 px-4 text-lg"
      color="warning"
      variant="bordered"
      startContent={<BsPerson className="text-2xl" />}
    >
      Go To Profile
    </Button>
      </Link>
    </div>
  );
}
