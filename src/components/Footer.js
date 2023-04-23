export default function Footer() {
  return (
    <div className={"flex items-center justify-center"}>
      <span className={"dark-slate p-8 font-monospace text-xs lg:text-sm"}>
      Built by{" "} 
        <a
          className={"hover-accent"}
          href={"https://github.com/ghousek1"}
          target={"_blank"}
          rel="noreferrer"
        >
         GhouseK1
        </a>{" "}
        & Design inspired by{" "}
        <a
          className={"hover-accent"}
          href={"https://brittanychiang.com/"}
          target={"_blank"}
          rel="noreferrer"
        >
         Brittany Chiang
        </a>
      </span>
    </div>
  );
}
