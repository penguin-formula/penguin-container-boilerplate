import { ApiModelProperty } from '@nestjs/swagger';

export class PenguinDto {

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly age: number;

    @ApiModelProperty()
    readonly color: string;

    @ApiModelProperty()
    readonly specie: string;
}