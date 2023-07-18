import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center justify-center ">
      <Image src="/logo.svg" alt="Logo do site" width={88} height={88} />
    </div>
  );
}
