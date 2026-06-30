import Script from "next/script";
import type { CSSProperties } from "react";

/**
 * Behold (behol.so) Instagram feed widget — a drop-in web component.
 *
 * Loads Behold's widget script once and renders the <behold-widget> custom
 * element for the given feed ID. Styling/layout of the grid is controlled in
 * the Behold dashboard for that feed.
 *
 * @see https://behold.so/docs/widgets/
 */

// The widget is a custom element, so we teach JSX/TS about the tag.
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "behold-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { "feed-id": string },
        HTMLElement
      >;
    }
  }
}

export default function BeholdWidget({
  feedId,
  className,
  style,
}: {
  feedId: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <>
      <Script
        id="behold-widget-script"
        src="https://w.behold.so/widget.js"
        type="module"
        strategy="lazyOnload"
      />
      <behold-widget feed-id={feedId} className={className} style={style} />
    </>
  );
}
