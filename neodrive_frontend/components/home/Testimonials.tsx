import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "../ui/badge";

interface Review {
  name: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  {
    name: "Lorem Ipsum",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
  },
  {
    name: "Dolor Sit",
    rating: 4,
    comment:
      "Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit.",
  },
  {
    name: "Amet Consectetur",
    rating: 5,
    comment:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta.",
  },
  {
    name: "Adipiscing Elit",
    rating: 5,
    comment:
      "Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna.",
  },
  {
    name: "Curabitur Blandit",
    rating: 5,
    comment:
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur.",
  },
];

const Stars = ({ count }: { count: number }) => {
  return (
    <div>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} style={{ color: "#FD0" }}>
          ★
        </span>
      ))}
    </div>
  );
};

export const Testimonials = () => {
  return (
    <div className="space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
      <Badge className="bg-yellow-300 border-2 border-black text-black text-xs px-3 py-1 rounded-sm shadow-[3px_3px_0px_rgba(0,0,0,1)]">
          Apa kata Mereka?
        </Badge>
        <h2 className="text-4xl font-bold">Testimonials</h2>
        <p className="max-w-2xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          efficitur velit ut tincidunt faucibus. Nulla justo lacinia elit.
        </p>
      </div>
      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-background h-96">
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      <div className="size-16 rounded-full border-2 bg-blue-100"></div>
                      <p className="text-center mt-4 font-bold">
                        {review.name}
                      </p>
                      <Stars count={review.rating} />
                      <p className="text-center mt-4">{review.comment}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
