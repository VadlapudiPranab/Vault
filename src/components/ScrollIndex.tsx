import { scrollIndex } from "../data";

export function ScrollIndex() {
  return (
    <aside className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block" aria-label="Section index">
      <div className="flex flex-col items-center gap-4">
        <span className="h-14 w-px bg-white/20" />
        {scrollIndex.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group flex items-center gap-3 text-[11px] font-bold text-white/30 transition hover:text-vault-cyan"
          >
            <span>{item.label}</span>
            <span className="h-px w-5 bg-white/20 transition group-hover:w-9 group-hover:bg-vault-cyan" />
          </a>
        ))}
        <span className="h-14 w-px bg-white/20" />
      </div>
    </aside>
  );
}
