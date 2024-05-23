import { Logger } from '@nestjs/common';
import { DefaultNamingStrategy, NamingStrategyInterface } from 'typeorm';
import { snakeCase } from 'typeorm/util/StringUtils';

export class SnakeNamingStrategy
  extends DefaultNamingStrategy
  implements NamingStrategyInterface
{
  private readonly logger = new Logger(this.constructor.name);
  /**
   * Normalizes table name.
   *
   * @param targetName Name of the target entity that can be used to generate a table name.
   * @param userSpecifiedName For example if user specified a table name in a decorator, e.g. @Entity("name")
   */
  tableName(targetName: string, userSpecifiedName: string | undefined): string {
    return userSpecifiedName ? userSpecifiedName : snakeCase(targetName);
  }

  columnName(
    propertyName: string,
    customName: string,
    embeddedPrefixes: string[],
  ): string {
    const name = customName || snakeCase(propertyName);
    return snakeCase(embeddedPrefixes.join('_')) + name;
  }

  relationName(propertyName: string): string {
    this.logger.error({ propertyName, relationName: 'relationName' });
    return snakeCase(propertyName);
  }
  // default
  // relationName(propertyName: string): string {
  //   return propertyName;
  // }

  joinColumnName(relationName: string, referencedColumnName: string): string {
    return snakeCase(relationName + '_' + referencedColumnName);
  }

  joinTableName(
    firstTableName: string,
    secondTableName: string,
    firstPropertyName: string,
  ): string {
    return snakeCase(
      firstTableName +
        '_' +
        firstPropertyName.replace(/\./gi, '_') +
        '_' +
        secondTableName,
    );
  }

  joinTableColumnName(
    tableName: string,
    propertyName: string,
    columnName?: string,
  ): string {
    return snakeCase(
      tableName + '_' + (columnName ? columnName : propertyName),
    );
  }

  eagerJoinRelationAlias(alias: string, propertyPath: string): string {
    this.logger.error({
      alias,
      propertyPath,
      eagerJoinRelationAlias: 'eagerJoinRelationAlias',
    });
    return alias + '__' + propertyPath.replace('.', '_');
  }
  // default
  // eagerJoinRelationAlias(alias: string, propertyPath: string): string {
  //   return alias + '_' + propertyPath.replace('.', '_');
  // }
}
