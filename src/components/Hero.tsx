import { ContentWrapper } from "./ContentWrapper";
import { useRouter } from "next/router";

interface HeroProps {
  numberOfIssues: number;
  variant: "homepage" | "issue-detail";
}

export const Hero = ({ numberOfIssues, variant }: HeroProps) => {
  const router = useRouter();

  return (
    <div className="bg-[#FAFAFA]">
      <ContentWrapper>
        <div className="lg:text-2xl xl:text-3xl text-4xl leading-snug max-w-screen-xl text-center sm:py-10 py-32 space-y-5 font-semibold">
          <p>
            Hi 👋, I am Petr{" "}
            <img
              src="https://orukami.fra1.digitaloceanspaces.com/dropshare/2025/06/BekG9Cx3.jpg"
              className="inline-block lg:w-8 w-12 relative -mt-2 rounded-full"
            />{" "}
            and I am proud owner of Volvo{" "}
            <img
              src="https://resource.digitaldealer.com.au/image/232674328682fd0ad5e41e135352412_0_0.png"
              className="inline-block lg:w-20 lg:-mt-2 w-32 relative -mt-4"
            />{" "}
            EX30.
          </p>
          <p>I love ❤️ the car and appreciate 🙏 the innovation behind it.</p>

          {variant === "homepage" && (
            <>
              <p>
                Here are{" "}
                <span className="text-[#1C6EBA]">{numberOfIssues}</span>{" "}
                improvements 💡 that could make it even better.
              </p>
              <p className="text-base md:text-sm font-normal text-gray-600 max-w-6xl mx-auto">
                Don't see your issue listed below? Please{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSesGK4HvbY1Q7QRtsq6FC-FQ68FBJCGXEJhlmxcDP0G61TsGA/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#1C6EBA] hover:opacity-80"
                >
                  submit it via this form
                </a>{" "}
                - there's a better chance I'll add it than if you email me.
              </p>
            </>
          )}

          {variant === "issue-detail" && (
            <p>
              Here is issue{" "}
              <span className="text-[#1C6EBA]">#{router.query.id}</span> of{" "}
              <span className="text-[#1C6EBA]">{numberOfIssues}</span>{" "}
              improvements 💡 that could make it better.
            </p>
          )}
        </div>
      </ContentWrapper>
    </div>
  );
};
