interface ContentWrapperProps {
  children: React.ReactNode;
}

export const ContentWrapper = ({ children }: ContentWrapperProps) => (
  <div className="flex justify-center">
    <div className="leading-relaxed sm:px-4 px-16 py-8 max-w-7xl flex-1">
      {children}
    </div>
  </div>
);
