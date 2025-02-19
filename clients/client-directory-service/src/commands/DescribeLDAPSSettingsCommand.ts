// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import {
  DescribeLDAPSSettingsRequest,
  DescribeLDAPSSettingsRequestFilterSensitiveLog,
  DescribeLDAPSSettingsResult,
  DescribeLDAPSSettingsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeLDAPSSettingsCommand,
  serializeAws_json1_1DescribeLDAPSSettingsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeLDAPSSettingsCommandInput extends DescribeLDAPSSettingsRequest {}
export interface DescribeLDAPSSettingsCommandOutput extends DescribeLDAPSSettingsResult, __MetadataBearer {}

/**
 * <p>Describes the status of LDAP security for the specified directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeLDAPSSettingsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeLDAPSSettingsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DescribeLDAPSSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLDAPSSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeLDAPSSettingsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 */
export class DescribeLDAPSSettingsCommand extends $Command<
  DescribeLDAPSSettingsCommandInput,
  DescribeLDAPSSettingsCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLDAPSSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLDAPSSettingsCommandInput, DescribeLDAPSSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "DescribeLDAPSSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLDAPSSettingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeLDAPSSettingsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLDAPSSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeLDAPSSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLDAPSSettingsCommandOutput> {
    return deserializeAws_json1_1DescribeLDAPSSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
