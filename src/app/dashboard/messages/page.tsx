import { FamilyDashboardShell } from "@/components/FamilyDashboardShell";
import { Button, Icon } from "@/components/ui";

const inbox = [
  {
    name: "Unread message, selected",
    subject: "This is the subject line for this message ...",
    time: "1 min ago",
    unread: true,
    selected: true,
  },
  {
    name: "Unread message, not selected",
    subject: "This is the subject line for this message ...",
    time: "1 days ago",
    unread: true,
  },
  {
    name: "Sunshine Children’s Center",
    subject: "Your tour request has been scheduled.",
    time: "3 days ago",
  },
  {
    name: "Cadence Academy",
    subject: "Family Open House is August 31, 2025 at 3:30pm",
    time: "7 days ago",
  },
];

export default function DashboardMessagesPage() {
  return (
    <FamilyDashboardShell active="messages" pageIcon="icon-question-answer.svg">
      <div className="flex max-w-[1152px] flex-col gap-8">
        <h1 className="font-heavy text-[28px] leading-10 text-[#1d1d1d]">
          Messages
        </h1>

        <div className="flex h-10 w-[335px] items-center gap-2 rounded-md bg-[#eee] px-4">
          <Icon name="icon-search.svg" size={24} />
          <span className="text-base text-[#9e9e9e]">Search messages</span>
        </div>

        <div className="flex gap-4">
          <div className="flex w-[534px] shrink-0 flex-col gap-1 border border-[#e0e0e0] bg-white p-4">
            {inbox.map((item, i) => (
              <div key={item.name}>
                <div
                  className={`relative flex items-end justify-between rounded-lg p-4 ${
                    item.selected ? "bg-[#f3f6fa]" : ""
                  }`}
                >
                  <div className="w-[324px]">
                    <p
                      className={`text-base text-black ${
                        item.unread ? "font-heavy" : ""
                      }`}
                    >
                      {item.name}
                    </p>
                    <p className="mt-1.5 text-sm text-black">{item.subject}</p>
                  </div>
                  <p className="text-sm text-black">{item.time}</p>
                  {item.unread ? (
                    <span className="absolute right-4 top-5 size-3 rounded-full bg-[#f57c00]" />
                  ) : null}
                </div>
                {i > 0 && i < inbox.length - 1 ? (
                  <hr className="border-[#e0e0e0]" />
                ) : null}
              </div>
            ))}
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-6 border border-[#e0e0e0] bg-white p-4">
            <div className="flex flex-col items-start pr-10">
              <div className="w-full max-w-[500px] rounded-lg bg-[#f3f6fa] p-4">
                <p className="font-heavy text-base text-black">
                  Subject line for message from a Specialist
                </p>
                <p className="mt-4 text-base text-black">
                  This is a message from a Specialist to a Family. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Mauris finibus
                  enim ligula, nec rhoncus tellus faucibus nec. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Morbi at neque
                  condimentum, gravida nisi et, pellentesque eros. Fusce ut
                  venenatis libero, ut congue diam.
                </p>
                <p className="mt-4 text-sm text-black">
                  Soraya.Habibi@chilcare.gov, August 24 at 5:57 PM
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="w-full max-w-[500px] rounded-lg bg-[#205c6f] px-4 py-4 pr-6">
                <p className="text-base text-white">
                  This is a reply back from Family. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Mauris finibus enim ligula, nec
                  rhoncus tellus faucibus nec. Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start pr-10">
              <div className="w-full max-w-[500px] rounded-lg bg-[#f3f6fa] p-4">
                <p className="font-heavy text-base text-black">
                  Subject line for message from a Specialist
                </p>
                <p className="mt-4 text-base text-black">Thanks! Received!</p>
                <p className="mt-4 text-sm text-black">
                  Soraya.Habibi@chilcare.gov, August 25 at 9:40 AM
                </p>
              </div>
            </div>

            <div className="flex h-[136px] items-start border-b border-[#9e9e9e] bg-[#eee] p-3">
              <span className="text-base text-[#9e9e9e]">
                Type your message here...
              </span>
            </div>

            <div className="flex items-center justify-between">
              <Button size="sm" variant="secondary">
                Attach document
                <Icon name="icon-assignment.svg" size={16} />
              </Button>
              <Button size="sm">
                Send message
                <Icon name="icon-send.svg" size={16} className="brightness-0 invert" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </FamilyDashboardShell>
  );
}
