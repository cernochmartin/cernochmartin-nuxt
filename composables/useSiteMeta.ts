import { SiteName, SiteUrl, SiteImage, SiteLogo, SiteLanguage, SiteTagLine, SiteDescription } from '../logic/metadata'

export function useSiteMeta() {
    return {
        SiteName,
        SiteUrl,
        SiteImage,
        SiteLogo,
        SiteLanguage,
        SiteTagLine,
        SiteDescription,
    }
}