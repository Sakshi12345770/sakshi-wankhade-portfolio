import { Code2, GraduationCap, Briefcase } from "lucide-react";

export default function AchievementBanner() {
   return (
    <div className="w-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/30 rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
      <h2 className="text-center text-foreground font-bold text-lg md:text-2xl lg:text-3xl mb-2">
        <span className="text-gradient">Open to Opportunities</span>
      </h2>

      <p className="text-center text-primary font-semibold text-sm md:text-base mb-4">
        Software Developer · Full Stack Developer
      </p>

      <div className="flex flex-wrap justify-center gap-3 md:gap-6">
        <div className="flex items-center gap-2 bg-secondary rounded-xl px-4 py-2 border border-border">
          <Code2 className="text-primary w-4 h-4" />
          <span className="text-foreground text-sm font-medium">
            3 Projects Built
          </span>
        </div>

        <div className="flex items-center gap-2 bg-secondary rounded-xl px-4 py-2 border border-border">
          <GraduationCap className="text-primary w-4 h-4" />
          <span className="text-foreground text-sm font-medium">
            BCA · Pursuing MCA
          </span>
        </div>

        <div className="flex items-center gap-2 bg-secondary rounded-xl px-4 py-2 border border-border">
          <Briefcase className="text-primary w-4 h-4" />
          <span className="text-foreground text-sm font-medium">
            Fresher
          </span>
        </div>
      </div>

      <p className="text-center text-muted-foreground text-xs mt-3">
        Passionate about Web Development, Backend Development and learning new technologies.
      </p>
    </div>
  );
}