export const metadata = {
  title: "Elevate OS",
  description: "Upgrade your focus, calm, and performance daily"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#000", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
