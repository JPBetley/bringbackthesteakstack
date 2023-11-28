import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          “Bring Back the Steak Stack” is a popular American Movement
          advocating for the return of Taco Bell&apos;s premier menu item.
        </p>
        <p className="mt-4">
          In 2011, the world was graced by the single most delicious
          food item Taco Bell has ever brought into the world: The Triple-Steak Stack,
          a perfect combination of the aptly-named Triple-Steak
          and melted cheese, on a soft, delicious flatbread.
        </p>
        <p className="mt-4">
          We lost our beloved Stack in 2013, suffering for two long years without it.
          In 2015, Taco Bell brought us The Return of the
          Steak Stack in all its greatness, but the King&apos;s reign was not meant to last.
        </p>
        <p className="mt-4">
          We humble fans are asking Taco Bell to Three-peat the Triple-Steak Stack.
          If it was good enough for Jordan, it&apos;s good enough for the Bell. Live Más.
        </p>
        {/*<ul role="list" className="mt-8 space-y-3">*/}
        {/*  {[*/}
        {/*    'Using boolean operations to combine basic shapes into complex icons',*/}
        {/*    'How to adapt icons to different sizes',*/}
        {/*    'Translating icons from an outline style to a solid style',*/}
        {/*    'Identifying the characteristics that make an icon set cohesive',*/}
        {/*    'Figma features and keyboard shortcuts to speed up your workflow',*/}
        {/*  ].map((feature) => (*/}
        {/*    <li key={feature} className="flex">*/}
        {/*      <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />*/}
        {/*      <span className="ml-4">{feature}</span>*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}
        {/*<p className="mt-8">*/}
        {/*  By the end of the book, you&apos;ll have all the confidence you need to dig*/}
        {/*  in and start creating beautiful icons that can hold their own against*/}
        {/*  any of the sets you can find online.*/}
        {/*</p>*/}
        {/*<p className="mt-10">*/}
        {/*  <Link*/}
        {/*    href="#free-chapters"*/}
        {/*    className="text-base font-medium text-blue-600 hover:text-blue-800"*/}
        {/*  >*/}
        {/*    Get two free chapters straight to your inbox{' '}*/}
        {/*    <span aria-hidden="true">&rarr;</span>*/}
        {/*  </Link>*/}
        {/*</p>*/}
      </Container>
    </section>
  )
}
