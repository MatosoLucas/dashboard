import { useRouter } from "next/router";
import Link, {LinkProps} from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactlyHref?: boolean;
}

export function ActiveLink({ children, shouldMatchExactlyHref, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter()

  let isActive = false;
  
  if (shouldMatchExactlyHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (!shouldMatchExactlyHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))) {
    isActive = true;
  }
  
  return(
    <Link {...rest}>
      {cloneElement(children, 
        {color: isActive ? 'telegram.400' : 'gray.50'
        })}
    </Link>
  )
}