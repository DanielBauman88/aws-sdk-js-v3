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

import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import {
  CreatePrefetchScheduleRequest,
  CreatePrefetchScheduleRequestFilterSensitiveLog,
  CreatePrefetchScheduleResponse,
  CreatePrefetchScheduleResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreatePrefetchScheduleCommand,
  serializeAws_restJson1CreatePrefetchScheduleCommand,
} from "../protocols/Aws_restJson1";

export interface CreatePrefetchScheduleCommandInput extends CreatePrefetchScheduleRequest {}
export interface CreatePrefetchScheduleCommandOutput extends CreatePrefetchScheduleResponse, __MetadataBearer {}

/**
 * <p>Creates a new prefetch schedule for the specified playback configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, CreatePrefetchScheduleCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, CreatePrefetchScheduleCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new CreatePrefetchScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePrefetchScheduleCommandInput} for command's `input` shape.
 * @see {@link CreatePrefetchScheduleCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 */
export class CreatePrefetchScheduleCommand extends $Command<
  CreatePrefetchScheduleCommandInput,
  CreatePrefetchScheduleCommandOutput,
  MediaTailorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePrefetchScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaTailorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePrefetchScheduleCommandInput, CreatePrefetchScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "CreatePrefetchScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePrefetchScheduleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreatePrefetchScheduleResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePrefetchScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreatePrefetchScheduleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePrefetchScheduleCommandOutput> {
    return deserializeAws_restJson1CreatePrefetchScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
