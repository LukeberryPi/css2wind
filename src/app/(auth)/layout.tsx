export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth subpixel-antialiased" lang="en">
      <body className="min-h-screen bg-black text-white selection:bg-berryBlue selection:text-black">
        <main>{children}</main>
      </body>
    </html>
  );
}
