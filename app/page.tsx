"use client";

export default function Home() {
  return (
    <main className="px-6 py-8 max-w-[600px] mx-auto">
      <article>
        <h1
          className="text-xl font-semibold mb-4"
          style={{ filter: "blur(0px)", opacity: 1 }}
        >
          I&apos;m Simantak
        </h1>
        <div className="text-sm text-(--secondary-text) text-justify">
          <span style={{ filter: "blur(0px)", opacity: 1 }}>I&apos;m an </span>
          <span
            className="text-(--primary-text)"
            style={{ filter: "blur(0px)", opacity: 1 }}
          >
            engineer, founder
          </span>
          <span style={{ filter: "blur(0px)", opacity: 1 }}> and </span>
          <span
            className="text-(--primary-text)"
            style={{ filter: "blur(0px)", opacity: 1 }}
          >
            wannabe racing driver
          </span>
          <span style={{ filter: "blur(0px)", opacity: 1 }}>
            . I love working on projects with my friends and building the
            wackiest and coolest things.
          </span>
          <br />
          <br />
          <span style={{ filter: "blur(0px)", opacity: 1 }}>
            Studied computer science at the{" "}
          </span>
          <span
            className="text-(--primary-text)"
            style={{ filter: "blur(0px)", opacity: 1 }}
          >
            National University of Singapore
          </span>
          <span style={{ filter: "blur(0px)", opacity: 1 }}> and </span>
          <span
            className="text-(--primary-text)"
            style={{ filter: "blur(0px)", opacity: 1 }}
          >
            Stanford University
          </span>
          <span style={{ filter: "blur(0px)", opacity: 1 }}>. Now based in </span>
          <span
            className="text-(--primary-text)"
            style={{ filter: "blur(0px)", opacity: 1 }}
          >
            Menlo Park, California
          </span>
          <span style={{ filter: "blur(0px)", opacity: 1 }}>.</span>
          <br />
          <br />
          <span style={{ filter: "blur(0px)", opacity: 1 }}>
            Working on growth at{" "}
          </span>
          <a
            href="https://www.tinyfish.ai/"
            rel="noreferrer noopener"
            target="_blank"
            className="inline-flex items-center gap-1 text-(--primary-text) underline"
            style={{ filter: "blur(0px)", opacity: 1, textDecorationThickness: "1px", transition: "text-decoration-thickness 0.2s ease" }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.textDecorationThickness = "2px"}
            onMouseLeave={(e) => (e.target as HTMLElement).style.textDecorationThickness = "1px"}
          >
            TinyFish
          </a>
          <span style={{ filter: "blur(0px)", opacity: 1 }}> and building </span>
          <a
            href="https://getsangria.com"
            rel="noreferrer noopener"
            target="_blank"
            className="inline-flex items-center gap-1 text-(--primary-text) underline"
            style={{ filter: "blur(0px)", opacity: 1, textDecorationThickness: "1px", transition: "text-decoration-thickness 0.2s ease" }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.textDecorationThickness = "2px"}
            onMouseLeave={(e) => (e.target as HTMLElement).style.textDecorationThickness = "1px"}
          >
            Sangria
          </a>
          <span style={{ filter: "blur(0px)", opacity: 1 }}>
            {" "}with some awesome friends.
          </span>
          <br />
          <br />
          <span style={{ filter: "blur(0px)", opacity: 1 }}>
            If you&apos;d like to chat, about{" "}
          </span>
          <span
            className="text-(--primary-text)"
            style={{ filter: "blur(0px)", opacity: 1 }}
          >
            tech, companies or racing
          </span>
          <span style={{ filter: "blur(0px)", opacity: 1 }}>
            , I&apos;d love to. Send me a dm!
          </span>
          <br />
          <br />
          <div>
            <span style={{ filter: "blur(0px)", opacity: 1 }}>
              ~ see you soon!
            </span>
          </div>
          <br />
        </div>

        <div
          className="flex items-center gap-3 border-t pt-4 border-(--divider) justify-between"
          style={{ opacity: 1 }}
        >
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/simantak-dabhade"
              rel="noreferrer noopener"
              target="_blank"
              className="inline-flex items-center gap-1 font-medium text-xs transition-colors hover:text-(--primary-text)"
            >
              <svg role="img" viewBox="0 0 24 24" className="size-4">
                <title>GitHub</title>
                <path
                  fill="currentColor"
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                ></path>
              </svg>
            </a>
            <div className="h-3 w-[0.1px] bg-(--divider)"></div>
            <a
              href="https://x.com/not_simantak"
              rel="noreferrer noopener"
              target="_blank"
              className="inline-flex items-center gap-1 font-medium text-xs transition-colors hover:text-(--primary-text)"
            >
              <svg role="img" viewBox="0 0 24 24" className="size-4">
                <title>X</title>
                <path
                  fill="currentColor"
                  d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                ></path>
              </svg>
            </a>
            <div className="h-3 w-[0.1px] bg-(--divider)"></div>
            <a
              href="https://www.linkedin.com/in/simantak/"
              rel="noreferrer noopener"
              target="_blank"
              className="inline-flex items-center gap-1 font-medium text-xs transition-colors hover:text-(--primary-text)"
            >
              <svg role="img" viewBox="0 0 24 24" className="size-4">
                <title>LinkedIn</title>
                <path
                  fill="currentColor"
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                ></path>
              </svg>
            </a>
          </div>
          <div>
            <a
              href="https://x.com/not_simantak"
              rel="noreferrer noopener"
              target="_blank"
              className="inline-flex items-center gap-1 font-medium text-xs transition-colors hover:text-(--primary-text) hover:underline text-(--primary-text)"
            >
              Follow Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-right"
                aria-hidden="true"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
