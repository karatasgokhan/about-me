import { motion } from "framer-motion";
import { Article } from "@/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ArticleCardProps {
  article: Article;
  index: number;
}

export function ArticleCard({ article, index }: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="relative aspect-video">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-1">{article.title}</CardTitle>
          <p className="text-sm text-gray-500">{article.date}</p>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="line-clamp-3 text-gray-700">{article.excerpt}</p>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full group">
            <span className="relative">
              Read More
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
} 