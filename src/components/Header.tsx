import logo from "@/assets/logo.svg";
import logoMobile from "@/assets/logo-mobile.svg";
import searchIcon from "@/assets/search.svg";
import bell from "@/assets/bell.svg";
import avatar from "@/assets/avatar.png";
import angle from "@/assets/angle.svg";
import { Avatar, TextInput, Popover } from "@mantine/core";
import { Sling as Hamburger } from "hamburger-react";
import { ChangeEvent, useState } from "react";
import clsx from "clsx";
import { useClickAway } from "use-click-away-react";
import { useAppContext } from "@/context/AppContext";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const { clickAwayRef } = useClickAway(
    () => setOpenMenu(false),
    ["menu", "mantine-Popover-dropdown"],
  );
  const { search, setSearch } = useAppContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <header
      className="xs:gap-8 xs:px-4 xs:py-4 sticky top-0 isolate z-30 flex items-center justify-between gap-4 bg-neutral-100 px-2 py-3 lg:px-16"
      ref={clickAwayRef}
    >
      <div className="xs:gap-12 z-10 flex items-center justify-between gap-4 lg:gap-24">
        <img src={logo} alt="Unlimi logo" className="hidden md:block" />
        <img src={logoMobile} alt="Unlimi logo" className="w-10 md:hidden" />
        <div>
          <TextInput
            placeholder="Search by patients..."
            value={search}
            onChange={handleChange}
            leftSection={<img src={searchIcon} alt="" className="min-w-max" />}
            styles={{
              input: {
                paddingInline: "3.5em",
                paddingBlock: "1.5em",
                fontFamily: "Inter, sans-serif",
              },
              section: {
                marginLeft: "0.5em",
              },
            }}
          />
        </div>
      </div>
      <div
        className={clsx(
          "absolute bottom-0 right-0 -z-10 flex min-w-40 items-center gap-4 rounded-[0_0_0.3em_0.3em] bg-neutral-100 p-3 opacity-0 transition-all",
          openMenu && "translate-y-full opacity-100",
          "md:static md:opacity-100",
        )}
      >
        <Popover width={200} position="bottom" withArrow shadow="md">
          <Popover.Target>
            <button>
              <img src={bell} alt="Notifications" className="active:scale-90" />
            </button>
          </Popover.Target>
          <Popover.Dropdown>
            <p>Nothing to see here</p>
          </Popover.Dropdown>
        </Popover>
        <Popover width={250} position="bottom" shadow="md">
          <Popover.Target>
            <div className="flex cursor-pointer items-center gap-4 active:scale-95">
              <Avatar color="gray" radius="xl" src={avatar}>
                DK
              </Avatar>
              <p className="font-inter font-medium">Deko</p>
              <img src={angle} alt="" />
            </div>
          </Popover.Target>
          <Popover.Dropdown>
            <div className="pb-3">
              <p className="text-sm leading-5">Signed in as</p>
              <p className="truncate text-sm font-medium leading-5 text-gray-900">
                dekoking@example.com
              </p>
            </div>
            <div>
              <a
                href="javascript:void(0)"
                tabIndex={0}
                className="flex w-full justify-between pb-2 text-left text-sm leading-5 text-gray-700 transition-colors hover:text-blue-900 focus-visible:text-blue-900"
              >
                Account settings
              </a>
              <a
                href="javascript:void(0)"
                tabIndex={1}
                className="flex w-full justify-between pb-2 text-left text-sm leading-5 text-gray-700 transition-colors hover:text-blue-900 focus-visible:text-blue-900"
              >
                Support
              </a>
              <span
                tabIndex={-1}
                className="flex w-full cursor-not-allowed justify-between pb-2 text-left text-sm leading-5 text-gray-700 opacity-50"
                aria-disabled="true"
              >
                New feature (soon)
              </span>
              <a
                href="javascript:void(0)"
                tabIndex={2}
                className="flex w-full justify-between pb-2 text-left text-sm leading-5 text-gray-700 transition-colors hover:text-blue-900 focus-visible:text-blue-900"
              >
                License
              </a>
            </div>
            <div>
              <a
                href="javascript:void(0)"
                tabIndex={3}
                className="flex w-full justify-between pb-2 text-left text-sm leading-5 text-red-700 transition-colors hover:text-red-900 focus-visible:text-red-900"
              >
                Sign out
              </a>
            </div>
          </Popover.Dropdown>
        </Popover>
      </div>
      <div className="menu md:hidden">
        <Hamburger toggled={openMenu} toggle={setOpenMenu} size={25} />
      </div>
    </header>
  );
}
