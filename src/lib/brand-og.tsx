export const ogImageSize = {
  width: 1200,
  height: 630,
};

export const iconSize = {
  width: 32,
  height: 32,
};

export const appleIconSize = {
  width: 180,
  height: 180,
};

export function BrandOgCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#050816",
        backgroundImage:
          "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.35) 0%, rgba(5,8,22,0) 60%)",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 84,
            height: 84,
            borderRadius: 20,
            backgroundImage:
              "linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)",
            color: "#ffffff",
            fontSize: 48,
            fontWeight: 700,
          }}
        >
          V
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#F5F6FA",
          }}
        >
          Vertex
          <span style={{ color: "#7C3AED" }}>.</span>
        </div>
      </div>

      <div
        style={{
          marginTop: 28,
          display: "flex",
          fontSize: 28,
          color: "#B4BACC",
        }}
      >
        Premium websites. AI-powered software. Built to convert.
      </div>
    </div>
  );
}

export function BrandIconMark({
  fontSize,
}: {
  fontSize: number;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)",
        borderRadius: "22%",
        color: "#ffffff",
        fontSize,
        fontWeight: 700,
        fontFamily: "sans-serif",
      }}
    >
      V
    </div>
  );
}