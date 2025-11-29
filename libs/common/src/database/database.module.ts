import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports:[
        MongooseModule.forRoot('monogodb://localhost/sleepr')
    ]
})
export class DatabaseModule {}
