export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth subpixel-antialiased" lang="en">
      <body className="min-h-screen bg-black text-white">
        <main>{children}</main>
      </body>
    </html>
  );
}
