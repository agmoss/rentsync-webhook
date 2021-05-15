import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";
import { WL } from "./logger/winston.logger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: WL(),
    });
    await app.listen(3000);
}
bootstrap();
