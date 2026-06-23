import { AppImage as Image } from "@/components/atoms/AppImage";
import { Text } from "@/components/atoms/Text";
import { getAddressQualityHealthCheckReportImage } from "@/lib/address-quality-health-check-report-images";
import type { AddressServicePageDataAccuracyCodesPanel } from "@/lib/types/address-service-page";

export function AddressDataAccuracyCodesPanel({
  panel,
}: {
  panel: AddressServicePageDataAccuracyCodesPanel;
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:items-stretch">
      <div className="overflow-hidden rounded-radius-lg bg-offering-protection">
        <Image
          src={getAddressQualityHealthCheckReportImage(panel.imageKey)}
          alt=""
          width={590}
          height={726}
          className="h-auto w-full object-contain object-center"
          sizes="(max-width: 1024px) 100vw, 590px"
        />
      </div>
      <Text
        as="div"
        className="prose-strong flex flex-col justify-center px-6 py-6 sm:px-10 lg:py-10"
      >
        {panel.body}
      </Text>
    </div>
  );
}
