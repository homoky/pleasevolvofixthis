import { ContentWrapper } from "./ContentWrapper";

export const AboutMe = () => (
  <div className="bg-[#FAFAFA]">
    <ContentWrapper>
      <div className="sm:text-lg text-xl leading-relaxed max-w-screen-xl sm:py-4 py-16 space-y-4">
        <p className="font-medium">About me</p>
        <p>
          My name is{" "}
          <a href="https://homoky.cz" className="underline text-[#1C6EBA]">
            Petr Homoky
          </a>
          , experienced technical product lead and a car enthusiast living in
          the beautiful Czech Republic. When I'm not working or exploring new
          technologies, you'll most likely find me in a car - I love cars and
          enjoy driving.
        </p>
        <p>
          I'm not exactly Volvo's typical target audience. I love to squeeze the
          maximum out of everything I have, buy, own or work on. I'm not the
          most disciplined driver on the road, but I am at work, I love details,
          I see what others don't see or overlook.
        </p>
        <p>
          The EX30 is my first electric car, mainly thanks to the simplicity of
          the interior and the fact that it doesn't pretend to be anything other
          than what it is.
        </p>
        <p>
          Dear Volvo, if you appreciate this feedback and want to say thanks,
          feel free to hire me or surprise me with an ES90 with dual motor as a
          token of appreciation!
        </p>
        <p>Just kidding... or am I?</p>
        <p>
          The best way to reach me is email{" "}
          <a
            href="mailto:p.homoky@gmail.com"
            className="underline text-[#1C6EBA]"
          >
            p.homoky@gmail.com
          </a>
          . I'd love to help take Volvo's infotainment system to the next level!
        </p>
      </div>
    </ContentWrapper>
  </div>
);
