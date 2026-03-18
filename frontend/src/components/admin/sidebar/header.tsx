import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import AutoBreadcrumb from "./autoBreadCumb";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
    const isMobile = useIsMobile();
    return (
        <header 
          className="flex h-16 shrink-0 items-center 
                    gap-2 transition-[width,height] ease-linear 
                    group-has-data-[collapsible=icon]/sidebar-wrapper:h-12
                    sticky md:static
                    top-0 z-50 px-2
                    bg-background
                    border-b">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            {!isMobile && (
              <AutoBreadcrumb/>   
            )}
          </div>
        </header>
    )
}