import { Header } from "@/components/header";
import { RoomCard } from "@/components/room-card";
import { RoomPreview } from "@/components/room-preview";
import { TotalPill } from "@/components/total-pill";
import { rooms } from "@/data/shop";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="grid min-h-screen overflow-x-hidden pt-[70px] lg:grid-cols-[minmax(0,974px)_306px] xl:justify-center">
        <div className="dot-grid relative h-[560px] overflow-hidden border-b border-[#f5f5f5] sm:h-[620px] lg:h-[calc(100vh-70px)] lg:min-h-[650px]">
          <div className="absolute left-4 top-9 z-20 md:left-5 md:top-12 lg:left-4 lg:top-12">
            <TotalPill />
          </div>
          <RoomPreview />
          <button className="absolute bottom-[40px] left-1/2 z-20 h-11 -translate-x-1/2 rounded-full bg-[#111] px-7 text-[14px] font-medium leading-5 text-white shadow-pill transition hover:bg-black">
            Customize room
          </button>
        </div>
        <aside className="scrollbar-thin overflow-y-auto rounded-[20px] bg-white px-4 pb-8 pt-4 shadow-rail lg:h-[calc(100vh-70px)] lg:min-h-[650px] lg:w-[306px] lg:rounded-l-[20px] lg:rounded-r-none">
          <h2 className="text-[18px] font-medium leading-7 text-[#111]">Design Your Space by Room</h2>
          <input
            aria-label="Search your room"
            className="mt-4 h-[38px] w-full rounded-[14px] bg-[#f7f7f7] px-4 text-[14px] text-[#111] outline-none placeholder:text-[#777]"
            placeholder="Search your room"
          />
          <div className="mt-[14px] grid gap-[14px]">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}
