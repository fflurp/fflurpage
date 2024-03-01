import { Layout } from "components/Layout";

type BlogImageProps = {
  src: string;
  alt: string;
  caption?: string;
};

const BlogImage: React.FC<BlogImageProps> = ({ src, alt, caption }) => {
  return (
    <div className="flex flex-col pt-16">
      <img src={src} alt={alt} className="w-full" />
      {caption ? (
        <span className="pt-4 font-title text-sm">{caption}</span>
      ) : null}
    </div>
  );
};

const BlogPost = () => {
  return (
    <Layout>
      <div className="w-full pt-14 text-center">
        <div className="text4">30/10/2022</div>
      </div>
      <div className="mx-auto max-w-[778px] pt-20 pb-40 md:pb-80">
        <h1 className="pb-10 font-title-bold text-5xl leading-[56px]">
          Product illustration 101: How to build a scalable product illustration
          system{" "}
        </h1>
        <article className="pb-40 text-lg">
          <p className="pb-4">
            Digital product’s hugely benefit from illustrations. Here’s a quick
            reminder why :{" "}
          </p>
          <ul className="list-inside list-disc pb-4">
            <li>
              Illustrations show something that copy can’t, it’s a great way of
              bringing clarity to the user and making difficult concepts easier
              and quicker to understand.
            </li>
            <li>
              A lot of frustration can be avoided by guiding users in a more
              visual way through their journey, like bringing closure to a task
              with a dedicated and noticeable illustration for instance.
              Bringing smoothness and fluidity to the user-flow will help
              promote user retention.
            </li>
            <li>
              Like many UI design decisions, illustration is an extra
              opportunity for the product’s branding to stand out and make the
              overall experience unique and distinguishable.
            </li>
          </ul>
          <p className="pb-4">
            We could go further with this list, but that’s not really the point
            as most product teams already acknowledge the importance of
            illustration as part of UI.
          </p>
          <p className="pb-4">
            What’s interesting is to understand how we can build an illustration
            system that covers every opportunity to add satisfaction and reduce
            frustration. What’s even more interesting is enabling it to grow
            with the product, without losing time or consistency. So let’s go
            through the process and characteristics of building a scalable
            illustration system together!
          </p>
          <h2 className="mt-40 pb-8 font-title-bold text-3xl">
            Defining guidelines for a cohesive illustration system
          </h2>
          <p className="pb-4">
            UI design itself is basically a set of guidelines that make the
            product align with branding and UX recommendations while allowing
            designers and developers to easily create or reuse components on the
            interfaces. From the user’s point of view, that consistency is what
            will make the entire experience make sense, that’s why it is
            important to define guidelines just as seriously while building an
            illustration system. Here’s some of the characteristics that should
            be defined clearly:
          </p>
          <ul className="list-inside list-disc pb-4">
            <li>
              Style: What illustration style fits with the product’s existing
              branding and tone.
            </li>
            <li>
              Colors: Choosing a color palette related to branding guidelines
              that will be used in illustrations and defining color combination
              guidelines.
            </li>
            <li>
              Shapes: Choosing between geometric or organic shapes, a tip could
              be to refer to the existing logo or icons.
            </li>
            <li>
              Stroke: Keeping to the same stroke thickness to make illustrations
              look cohesive.
            </li>
            <li>
              Size: Defining the different sizes needed depending on the
              different layout options of the interfaces.
            </li>
            <li>
              Categorization: Defining categories of illustrations according to
              the product’s topics (for a food delivery app it could look like
              this: food, drinks, people, etc).
            </li>
            <li>
              Naming convention: Choosing a consistent naming convention to keep
              the illustration system management logical.
            </li>
          </ul>
          <BlogImage
            src="/Blog/Illustration-system/blog1-1.png"
            alt="Illustration system guidelines"
          />
          <h2 className="mt-40 pb-8 font-title-bold text-3xl">
            Identifying strategic locations that would benefit from illustration
          </h2>
          <p className="pb-4">
            In order to make illustrations truly valuable for the product, we’ll
            need to map and go through every possible path in the user-flow to
            pin-down the specific cases that could need illustration. Taking a
            look at the product’s analytics is also a good way to undercover
            user frustration that could be solved. Here are some of the
            different sections, pages or states that generally benefit from
            illustration:
          </p>
          <ul className="list-inside list-disc pb-4">
            <li>
              Hero section: This one is probably the most common location for
              adding illustration, it allows the user to quickly understand the
              product’s purpose and can also be used to emphasize the brand’s
              values.
            </li>
            <li>
              Onboarding screens: Onboarding is also a common location for
              illustration, it’s a crucial activation leverage as it gives
              insight to the users to what the product has to offer and how they
              can use it.
            </li>
            <li>
              Features sections: This location can be particularly interesting
              for complex features presentation that could be understood better
              with illustration.
            </li>
            <li>
              Error state: Errors are always frustrating, the least we can do is
              show the users that the error occurred rather than letting them
              wonder what the heck is going on. The best we can do is add a fun
              or empathic illustration!
            </li>
            <li>
              {`Empty state: If the users ended up here they were expecting something.
              They're not going to find what they're looking for, but thet can find that
              out with an illustration.`}
            </li>
            <li>
              {`Loading state: If nothing is happening, the users will probably
              lose patience and leave, it's important to notify that what they're
              waiting for is coming. Besides, waiting is dull and time goes
              quicker when there’s something to look at.`}
            </li>
            <li>
              Success screens: This location is an opportunity to enhance user
              satisfaction and bring closure to the task they just undertook.
            </li>
          </ul>
          <p className="pb-4">
            Identifying strategic locations on the existing product is an
            obvious step in the process of building an illustration system.
            What’s also important is to keep in mind that it will need to be as
            flexible and customizable as possible as the product is likely to
            evolve in time.
          </p>
          <BlogImage
            src="/Blog/Illustration-system/blog1-2.png"
            alt="User flow"
          />
          <h2 className="mt-40 pb-8 font-title-bold text-3xl">
            Designing a flexible illustration system
          </h2>
          <p className="pb-4">
            To get an illustration system right, we have to understand that it’s
            not just meant to be a regular illustration set for the product. In
            fact, it works like a design system: It’s really the same process of
            designing and documenting components that can then be used by the
            team to create custom illustrations for the product. It’s meant to
            save time and resources on the illustration process while staying
            cohesive throughout the product.
          </p>
          <p className="pb-4">
            Depending on the topics related to the product, we’ll need to
            provide the system with a variety of different illustrations within
            the different categories. Let’s take the example of a food delivery
            app:
          </p>
          <ul className="list-inside list-disc pb-4">
            <li>Backgrounds: Different shapes, colors, etc.</li>
            <li>
              People: Representing different body shapes, hairstyles, skin tone.
            </li>
            <li>Transportation: Cars, bikes, motorcycles.</li>
            <li>Food: Burgers, pizzas, salads, tacos, cakes.</li>
            <li>Drinks: Soda, coffee, water, liquor.</li>
            <li>Buildings: Restaurants, shops, houses, apartment buildings.</li>
            <li>Symbols: Cross mark, check mark, etc.</li>
          </ul>
          <p className="pb-4">
            Once we have every individual illustration component, we create the
            master component that will contain them. That will allow us to
            design the illustration’s layout, mixing and matching several of our
            nested components according to the product’s need. Just like we
            design a screen referring to the design system.
          </p>
          <BlogImage
            src="/Blog/Illustration-system/blog1-3.gif"
            alt="Illustration system master component and nested components"
            caption="Interaction between the master component and nested components on Figma"
          />
          <h2 className="mt-40 pb-8 font-title-bold text-[32px]">
            Last thoughts
          </h2>
          <p className="pb-4">
            Building an illustration system is a great solution to make the
            design process easier and optimize time and resources within the
            product team. It does take a bit of preparation to get it right and
            although it’s probably the most scalable way to manage product
            illustration, it’s likely that it will need to be implemented with
            new illustration components over time. It might also be necessary to
            edit the illustration system depending on the evolutions of the
            product’s branding and design system. On a large scale, managing the
            illustration system can be a full-time job.
          </p>
          <p className="pb-4">
            That’s it, I hope this post was useful and made the process and
            benefits of building a scalable illustration system more
            comprehensible!
          </p>
          <p className="pb-4">
            PS: Sorry for those who like pineapple topping on their pizza... 🍍
          </p>
        </article>
      </div>
    </Layout>
  );
};

export default BlogPost;
