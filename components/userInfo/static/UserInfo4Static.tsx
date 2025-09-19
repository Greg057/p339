"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, FileDown } from "lucide-react";
import { Globe, Github, Linkedin, ExternalLink, Play, Presentation, FileText, Palette, Edit, Briefcase, Award, Youtube, Instagram } from 'lucide-react';
import { DiscordLogoIcon } from '@radix-ui/react-icons';

// Static personal data interface (pre-processed, no DB bloat)
interface StaticPersonalData {
  personal: {
    full_name: string | null
    title: string | null
    about_me: string | null
    location: string | null
    avatarUrl: string | null
    cvUrl: string | null
    custom_links: Array<{
      icon: string      // Library key OR custom SVG data
      title: string
      url: string
    }>
  }
}

// Icon resolver for static portfolios
function renderIcon(iconKey: string, className?: string) {
  // Handle custom SVG data
  if (iconKey.startsWith('<svg')) {
    return <div dangerouslySetInnerHTML={{ __html: iconKey }} className={className || 'w-4 h-4'} />
  }

  // Standard icon mapping
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    github: Github,
    linkedin: Linkedin,
    website: Globe,
    demo: ExternalLink,
    video: Play,
    slides: Presentation,
    documentation: FileText,
    design: Palette,
    blog: Edit,
    portfolio: Briefcase,
    certificate: Award,
    youtube: Youtube,
    instagram: Instagram,
    discord: DiscordLogoIcon,
    x: ({ className }) => (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    tiktok: ({ className }) => (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
    twitch: ({ className }) => (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.142V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
      </svg>
    ),
    reddit: ({ className }) => (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
    )
  }

  const IconComponent = iconMap[iconKey] || Globe
  return <IconComponent className={className || 'w-4 h-4'} />
}

export default function UserInfo4Static({ personal }: StaticPersonalData) {
  // Find specific social links from custom_links
  const githubLink = personal.custom_links?.find(link => link.icon === 'github');
  const linkedinLink = personal.custom_links?.find(link => link.icon === 'linkedin');
  const xLink = personal.custom_links?.find(link => link.icon === 'twitter' || link.icon === 'x');

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {personal.avatarUrl && (
            <Avatar className="w-32 h-32">
              <AvatarImage src={personal.avatarUrl || undefined} alt={personal.full_name || ''} />
              <AvatarFallback>{(personal.full_name || '').split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
          )}

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">{personal.full_name}</h1>
            {personal.title && (
              <p className="text-xl text-muted-foreground mb-4">{personal.title}</p>
            )}
            {personal.location && (
              <p className="text-muted-foreground mb-4">{personal.location}</p>
            )}

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-6">
              {/* Email contact */}
              {personal.custom_links?.find(link => link.icon === 'email') && (
                <Button variant="outline" size="sm" asChild>
                  <a href={`mailto:${personal.custom_links.find(link => link.icon === 'email')?.url}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </a>
                </Button>
              )}

              {/* CV/Resume download */}
              {personal.cvUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={personal.cvUrl} target="_blank" rel="noopener noreferrer">
                    <FileDown className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
              )}

              {/* Specific social links */}
              {githubLink && (
                <Button variant="outline" size="sm" asChild>
                  <a href={githubLink.url} target="_blank" rel="noopener noreferrer">
                    {renderIcon('github', 'mr-2')}
                    {githubLink.title}
                  </a>
                </Button>
              )}

              {linkedinLink && (
                <Button variant="outline" size="sm" asChild>
                  <a href={linkedinLink.url} target="_blank" rel="noopener noreferrer">
                    {renderIcon('linkedin', 'mr-2')}
                    {linkedinLink.title}
                  </a>
                </Button>
              )}

              {xLink && (
                <Button variant="outline" size="sm" asChild>
                  <a href={xLink.url} target="_blank" rel="noopener noreferrer">
                    {renderIcon('x', 'mr-2')}
                    {xLink.title}
                  </a>
                </Button>
              )}

              {/* Other custom links (excluding the ones we already handled) */}
              {personal.custom_links?.filter(link =>
                link.icon !== 'email' &&
                link.icon !== 'github' &&
                link.icon !== 'linkedin' &&
                link.icon !== 'twitter' &&
                link.icon !== 'x'
              ).map((link, index) => (
                <Button key={index} variant="outline" size="sm" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" title={link.title}>
                    {renderIcon(link.icon, 'mr-2')}
                    {link.title}
                  </a>
                </Button>
              ))}
            </div>

            {personal.about_me && (
              <p className="text-muted-foreground leading-relaxed">
                {personal.about_me}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}