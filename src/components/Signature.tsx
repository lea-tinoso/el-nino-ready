// The maker's mark, like an artist signing a painting.
export function Signature() {
  return (
    <aside
      aria-label="About the creator"
      className="flex w-fit -rotate-2 items-center gap-3"
    >
      <img
        src={`${import.meta.env.BASE_URL}lea.svg`}
        alt="Cartoon portrait of lea"
        width={56}
        height={56}
        className="size-14 flex-none rounded-full border-3 border-line"
      />
      <div>
        <p className="font-hand text-[28px] leading-none font-bold">
          created by lea
        </p>
        <p className="mt-1 max-w-[280px] text-[15px] leading-snug text-soft">
          software engineer who prepped for El Niño by shipping a website
          instead of buying a water drum.
        </p>
        <p className="mt-1 text-[14px]">
          <a
            className="font-semibold text-link hover:underline"
            href="https://github.com/lea-tinoso/el-nino-ready#readme"
            target="_blank"
            rel="noopener"
          >
            how it's made ↗
          </a>
          <span aria-hidden> · </span>
          <a
            className="font-semibold text-link hover:underline"
            href="https://lea-showcase.vercel.app"
            target="_blank"
            rel="noopener"
          >
            portfolio ↗
          </a>
          <span aria-hidden> · </span>
          <a
            className="font-semibold text-link hover:underline"
            href={`${import.meta.env.BASE_URL}chilimansi/`}
          >
            buy me a chilimansi
          </a>
        </p>
      </div>
    </aside>
  )
}
